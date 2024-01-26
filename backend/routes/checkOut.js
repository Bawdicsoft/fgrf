// // get All User
// router.get("/", userToken, async (req, res) => {
//   try {
//     const users = await getAllUser();
//     return res.send({ message: users });
//   } catch (err) {
//     return res.send({ message: err });
//   }
// });
// // user CreateUser Controller
// router.post("/signup", upload.single("file"), async (req, res) => {
//   try {
//     // await joiUSerSchema.validateAsync(req.body);
//     const { name, email, password } = req.body;
//     console.log("reqBoy---->", req.body);
//     // console.log(req.file.path);
//     const image = req.file.path;
//     const response = await createUser({
//       name,
//       email,
//       images: image,
//       password,
//     });
//     return res.status(200).send({ status: 200, message: response });
//   } catch (err) {
//     return res.status(400).send({ status: 400, message: err.message });
//   }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
require("dotenv").config();

const stripe = new Stripe(process.env.SECRET_KEY);
const host = process.env.HOST;

router.post("/session", async (req, res) => {
  const { body } = req;
  try {
    const date = new Date().toISOString();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "INV-" + date,
            },
            unit_amount: body?.amount * 100 || 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.origin}/donation`,
      cancel_url: `${req.headers.origin}/payment-error`,
    });
    res.status(200).json({ sessionId: session.id });
  } catch (err) {
    res.status(500).json({ error: `Error checkout session: ${err.message}` });
  }
});

module.exports = router;
