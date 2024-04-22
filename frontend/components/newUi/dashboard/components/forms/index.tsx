"use client";
import { useDashboardContext } from "@/components/newUi/contextApi/dashboardContext";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "@/components/newUi/config/firebase";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
export default function UpdateForm() {
  const dataContext = useDashboardContext();
  const mainSection = dataContext.mainSection;
  const midSection = dataContext.midSection;
  const childSection = dataContext.childSection;
  const [sec, setSec] = useState("");
  const [text, setText] = useState("");
  const [photo1, setPhoto1] = useState<any>(null);
  const [bannerPhoto, setBannerPhoto] = useState<any>(null);
  const [heroPhoto, setHeroPhoto] = useState<any>(null);
  const [photo2, setPhoto2] = useState<any>(null);
  const [video1, setVideo1] = useState<any>(null);
  const [video2, setVideo2] = useState<any>(null);
  const [video3, setVideo3] = useState<any>(null);
  const [urlList, setUrlList] = useState<any>([]);
  const [mainBannerUrlList, setMainBannerUrlList] = useState<any>([]);
  const [ourDepartmentUrlList, setOurDepartmentUrlList] = useState<any>([]);
  const [ramazanUrlList, setRamazanUrlList] = useState<any>([]);
  const [zakatUrlList, setZakatUrlList] = useState<any>([]);
  const [foodBoxUrlList, setFoodBoxUrlList] = useState<any>([]);
  const [winterUrlList, setWinterUrlList] = useState<any>([]);
  const [palestineUrlList, setPalestineUrlList] = useState<any>([]);
  const [orphanUrlList, setOrphanUrlList] = useState<any>([]);
  const [handPumpUrlList, setHandPumpUrlList] = useState<any>([]);
  const [waterUrlList, setWaterUrlList] = useState<any>([]);
  const [masjidUrlList, setMasjidUrlList] = useState<any>([]);
  const [achievementUrlList, setAchievementUrlList] = useState<any>([]);
  const [newsVideoUrlList, setnewsVideoUrlList] = useState<any>([]);
  const [galleryUrlList, setGalleryUrlList] = useState<any>([]);
  const [uploading1, setUploading1] = useState(false);
  const [uploadingOurDepartmentSlider, setUploadingOurDepartmentSlider] =
    useState(false);
  const [uploadingRamzanSlider, setUploadingRamzanSlider] = useState(false);
  const [uploadingZakatSlider, setUploadingZakatSlider] = useState(false);
  const [uploadingFoodBoxSlider, setUploadingFoodBoxSlider] = useState(false);
  const [uploadingWinterSlider, setUploadingWinterSlider] = useState(false);
  const [uploadingPalestineSlider, setUploadingPalestineSlider] =
    useState(false);
  const [uploadingOrphanSlider, setUploadingOrphanSlider] = useState(false);
  const [uploadingHandPumpSlider, setUploadingHandPumpSlider] = useState(false);
  const [uploadingWaterWellSlider, setUploadingWaterWellSlider] =
    useState(false);
  const [uploadingMasjidSlider, setUploadingMasjidSlider] = useState(false);
  const [uploadingGallerySlider, setUploadingGallerySlider] = useState(false);
  const [uploadingVideosSlider, setUploadingVideosSlider] = useState(false);

  const disasterManagementLst = [
    "Select An Option",
    "Disaster Management",
    "Covid-19",
    "Pakistan Flood",
    "Turkey & Syria Earthquake",
    "Morocco Earthquake",
    "Palestine",
  ];
  const healthCareLst = [
    "Select An Option",
    "Health Care",
    "Eye Camps",
    "Blood Donation",
    "Madical Van",
    "Faizan Rehabilitation Center",
    "Madical Clinic",
  ];
  const environmentDepartmentLst = [
    "Select An Option",
    "Environment Department",
    "Plantation",
  ];

  // Submit Handler
  const submitHandler = async (e: any) => {
    e.preventDefault();
    const dataRef = collection(db, "contents");
    const querySnapshot = await getDocs(dataRef);
    querySnapshot.forEach(async (docs) => {
      const docsData = docs.data();
      const chooseSec = docsData.content.sec;
      const chooseContent = docsData.content;
      if (mainSection === "Our Department") {
        if (chooseSec === sec) {
          console.log("chooseSec----->", chooseContent);
          const storageRef1 = ref(storage, "images/" + bannerPhoto?.name);
          const bannerSnapShot = await uploadBytes(storageRef1, bannerPhoto);
          const bannerImageUrl = await getDownloadURL(bannerSnapShot.ref);
          const storageRef2 = ref(storage, "images/" + heroPhoto?.name);
          const heroSnapShot = await uploadBytes(storageRef2, heroPhoto);
          const heroImageUrl = await getDownloadURL(heroSnapShot.ref);
          const videosRef = ref(storage, "videos/" + video1?.name);
          const titleVideos = await uploadBytes(videosRef, video1);
          const videoUrl = await getDownloadURL(titleVideos.ref);
          const docsId = docs.id;
          const docRef = doc(db, "contents", docsId);
          await updateDoc(docRef, {
            content: {
              bannerImg: bannerImageUrl || chooseContent.bannerImageUrl,
              heroSecImg: heroImageUrl || chooseContent.heroImageUrl,
              sec: sec || chooseContent.sec,
              text: text || chooseContent.text,
              slider: urlList || chooseContent.urlList,
              video: videoUrl || chooseContent.videoUrl,
            },
          });
        }
      }
      if (mainSection === "Appeals") {
        if (chooseSec === sec) {
          const storageRef1 = ref(storage, "images/" + photo1?.name);
          const firstImageSnapShot = await uploadBytes(storageRef1, photo1);
          const firstImageUrl = await getDownloadURL(firstImageSnapShot.ref);
          const storageRef2 = ref(storage, "images/" + photo2?.name);
          const secondImageSnapShot = await uploadBytes(storageRef2, photo2);
          const secondImageUrl = await getDownloadURL(secondImageSnapShot.ref);
          const videosRef = ref(storage, "videos/" + video1?.name);
          const titleVideos = await uploadBytes(videosRef, video1);
          const videoUrl = await getDownloadURL(titleVideos.ref);
          const docsId = docs.id;
          const docRef = doc(db, "contents", docsId);
          await updateDoc(docRef, {
            content: {
              photo: [
                firstImageUrl || chooseContent.photo[0],
                secondImageUrl || chooseContent.photo[1],
              ],
              sec: sec || chooseContent.sec,
              text: text || chooseContent.text,
              slider: urlList || chooseContent.urlList,
              video: videoUrl || chooseContent.videoUrl,
            },
          });
        }
      }
      if (mainSection === "Donations") {
        if (chooseSec === sec) {
          const newCollectionRef = collection(db, "contents");
          const storageRef1 = ref(storage, "images/" + photo1?.name);
          const titleSnapshot1 = await uploadBytes(storageRef1, photo1);
          const titleImageUrl1 = await getDownloadURL(titleSnapshot1.ref);
          const docsId = docs.id;
          const docRef = doc(db, "contents", docsId);
          await updateDoc(docRef, {
            content: {
              sec: sec || chooseContent.sec,
              text: text || chooseContent.text,
              photo: titleImageUrl1 || chooseContent.titleImageUrl1,
            },
          });
        }
      }
      if (mainSection === "Main Page") {
        if (chooseSec === sec) {
          const newCollectionRef = collection(db, "contents");
          const storageRef1 = ref(storage, "images/" + photo1?.name);
          const titleSnapshot1 = await uploadBytes(storageRef1, photo1);
          const titleImageUrl1 = await getDownloadURL(titleSnapshot1.ref);
          const docsId = docs.id;
          const docRef = doc(db, "contents", docsId);
          await updateDoc(docRef, {
            content: {
              sec: sec || chooseContent.sec,
              text: text || chooseContent.text,
              photo: titleImageUrl1 || chooseContent.titleImageUrl1,
            },
          });
        }
      }
    });
  };
  // end update code

  // create code for appeal Sections
  const createHandler = async (e: any) => {
    try {
      const newCollectionRef = collection(db, "contents");
      const newDocRef = doc(newCollectionRef);
      const storageRef1 = ref(storage, "images/" + photo1?.name);
      const titleSnapshot1 = await uploadBytes(storageRef1, photo1);
      const titleImageUrl1 = await getDownloadURL(titleSnapshot1.ref);
      const storageRef2 = ref(storage, "images/" + photo2?.name);
      const titleSnapshot2 = await uploadBytes(storageRef2, photo2);
      const titleImageUrl2 = await getDownloadURL(titleSnapshot2.ref);
      const videosRef1 = ref(storage, "videos/" + video1?.name);
      const titleVideos1 = await uploadBytes(videosRef1, video1);
      const videoUrl1 = await getDownloadURL(titleVideos1.ref);
      const videosRef2 = ref(storage, "videos/" + video2?.name);
      const titleVideos2 = await uploadBytes(videosRef2, video2);
      const videoUrl2 = await getDownloadURL(titleVideos2.ref);
      const mainSection = {
        content: {
          sec,
          text,
          photo: [titleImageUrl1, titleImageUrl2],
          video: [videoUrl1, videoUrl2],
          slider: urlList,
        },
      };

      await setDoc(newDocRef, mainSection, { merge: true });
      if (mainSection !== undefined) {
        console.log("Ok ki report hai bahi");
      }
    } catch (error) {
      console.error("Roko bahi firebaser error arha hai--->", error);
    }
  };
  //   console.log("photo---->", photo1);
  // };

  // create code for main Page Section
  // try {
  //   const newCollectionRef = collection(db, "contents");
  //   const newDocRef = doc(newCollectionRef);
  //   const storageRef1 = ref(storage, "images/" + photo1?.name);
  //   const titleSnapshot1 = await uploadBytes(storageRef1, photo1);
  //   const titleImageUrl1 = await getDownloadURL(titleSnapshot1.ref);
  //   const storageRef2 = ref(storage, "images/" + photo2?.name);
  //   const titleSnapshot2 = await uploadBytes(storageRef2, photo2);
  //   const titleImageUrl2 = await getDownloadURL(titleSnapshot2.ref);
  //   const videosRef1 = ref(storage, "videos/" + video1?.name);
  //   const titleVideos1 = await uploadBytes(videosRef1, video1);
  //   const videoUrl1 = await getDownloadURL(titleVideos1.ref);
  //   const videosRef2 = ref(storage, "videos/" + video2?.name);
  //   const titleVideos2 = await uploadBytes(videosRef2, video2);
  //   const videoUrl2 = await getDownloadURL(titleVideos2.ref);
  //   const videosRef3 = ref(storage, "videos/" + video3?.name);
  //   const titleVideos3 = await uploadBytes(videosRef3, video3);
  //   const videoUrl3 = await getDownloadURL(titleVideos3.ref);
  //   const mainSection = {
  //     content: {
  //       sec,
  //       text,
  //       newsVideos: newsVideoUrlList,
  //       newsVideo: [videoUrl1, videoUrl2, videoUrl3],
  //       mainBannerSlider: mainBannerUrlList,
  //       ourDepartmentSlider: ourDepartmentUrlList,
  //       achievement: achievementUrlList,
  //       ramazan: ramazanUrlList,
  //       zakat: zakatUrlList,
  //       foobox: foodBoxUrlList,
  //       winter: winterUrlList,
  //       palestine: palestineUrlList,
  //       orphan: orphanUrlList,
  //       handPump: handPumpUrlList,
  //       waterWell: waterUrlList,
  //       masjid: masjidUrlList,
  //     },
  //   };

  //   await setDoc(newDocRef, mainSection, { merge: true });
  //   if (mainSection !== undefined) {
  //     console.log("Ok ki report hai bahi");
  //   }
  // } catch (error) {
  //   console.error("Roko bahi firebaser error arha hai--->", error);
  // }

  // create code for Donation Sections
  // try {
  //   const newCollectionRef = collection(db, "contents");
  //   const newDocRef = doc(newCollectionRef);
  //   const storageRef1 = ref(storage, "images/" + photo1?.name);
  //   const titleSnapshot1 = await uploadBytes(storageRef1, photo1);
  //   const titleImageUrl1 = await getDownloadURL(titleSnapshot1.ref);
  //   const mainSection = {
  //     content: {
  //       sec,
  //       text,
  //       photo: titleImageUrl1,
  //     },
  //   };

  //   await setDoc(newDocRef, mainSection, { merge: true });
  //   if (mainSection !== undefined) {
  //     console.log("Ok ki report hai bahi");
  //   }
  // } catch (error) {
  //   console.error("Roko bahi firebaser error arha hai--->", error);
  // }

  const bannerPhotoHandler = (e: any) => {
    const bannerFile = e.target.files[0];
    setBannerPhoto(bannerFile);
  };
  const heroPhotoHandler = (e: any) => {
    const heroFile = e.target.files[0];
    setHeroPhoto(heroFile);
  };
  const photoHandler = (e: any) => {
    const file1 = e.target.files[0];
    setPhoto1(file1);
    const file2 = e.target.files[1];
    setPhoto2(file2);
    console.log("file1,file2", file1, file2);
  };

  const sliderPhotosHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploading1(true);
    for (const file of files) {
      const storageRef = ref(storage, `images/slider/${file.name}`);

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        if (mainSection === "Main Page") {
          setMainBannerUrlList((prev: any) => [...prev, downloadURL]);
        } else {
          setUrlList((prev: any) => [...prev, downloadURL]);
        }
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
    setUploading1(false);
  };

  // For Main page
  const ourDepartmentSliderPhotosHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploadingOurDepartmentSlider(true);

    for (const file of files) {
      const storageRef = ref(storage, `images/slider/${file.name}`);

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        setOurDepartmentUrlList((prev: any) => [...prev, downloadURL]);
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
    setUploadingOurDepartmentSlider(false);
  };
  const ramzanSliderPhotosHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploadingRamzanSlider(true);
    for (const file of files) {
      const storageRef = ref(storage, `images/slider/${file.name}`);

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        setRamazanUrlList((prev: any) => [...prev, downloadURL]);
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
    setUploadingRamzanSlider(false);
  };
  const zakatSliderPhotosHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploadingZakatSlider(true);
    for (const file of files) {
      const storageRef = ref(storage, `images/slider/${file.name}`);

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        setZakatUrlList((prev: any) => [...prev, downloadURL]);
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
    setUploadingZakatSlider(false);
  };
  const foodBoxSliderPhotosHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploadingFoodBoxSlider(true);
    for (const file of files) {
      const storageRef = ref(storage, `images/slider/${file.name}`);

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        setFoodBoxUrlList((prev: any) => [...prev, downloadURL]);
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
    setUploadingFoodBoxSlider(false);
  };
  const winterSliderPhotosHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploadingWinterSlider(true);
    for (const file of files) {
      const storageRef = ref(storage, `images/slider/${file.name}`);

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        setWinterUrlList((prev: any) => [...prev, downloadURL]);
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
    setUploadingWinterSlider(false);
  };
  const palestineSliderPhotosHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploadingPalestineSlider(true);
    for (const file of files) {
      const storageRef = ref(storage, `images/slider/${file.name}`);

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        setPalestineUrlList((prev: any) => [...prev, downloadURL]);
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
    setUploadingPalestineSlider(false);
  };
  const orphanSliderPhotosHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploadingOrphanSlider(true);
    for (const file of files) {
      const storageRef = ref(storage, `images/slider/${file.name}`);

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        setOrphanUrlList((prev: any) => [...prev, downloadURL]);
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
    setUploadingOrphanSlider(false);
  };
  const handPumpSliderPhotosHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploadingHandPumpSlider(true);
    for (const file of files) {
      const storageRef = ref(storage, `images/slider/${file.name}`);

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        setHandPumpUrlList((prev: any) => [...prev, downloadURL]);
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
    setUploadingHandPumpSlider(false);
  };
  const waterWellSliderPhotosHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploadingWaterWellSlider(true);
    for (const file of files) {
      const storageRef = ref(storage, `images/slider/${file.name}`);

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        setWaterUrlList((prev: any) => [...prev, downloadURL]);
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
    setUploadingWaterWellSlider(false);
  };
  const masjidSliderPhotosHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploadingMasjidSlider(true);
    for (const file of files) {
      const storageRef = ref(storage, `images/slider/${file.name}`);

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        setMasjidUrlList((prev: any) => [...prev, downloadURL]);
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
    setUploadingMasjidSlider(false);
  };
  const gallerySliderPhotosHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploadingGallerySlider(true);
    for (const file of files) {
      const storageRef = ref(storage, `images/slider/${file.name}`);

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        setGalleryUrlList((prev: any) => [...prev, downloadURL]);
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
    setUploadingGallerySlider(false);
  };
  const sliderVideosHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);
    setUploadingVideosSlider(true);
    for (const file of files) {
      const storageRef = ref(storage, `videos/${file.name}`);

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        setnewsVideoUrlList((prev: any) => [...prev, downloadURL]);
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
    setUploadingVideosSlider(false);
  };

  const achievementPhotosHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files: File[] = Array.from(e.target.files || []);

    for (const file of files) {
      const storageRef = ref(storage, `images/slider/${file.name}`);

      try {
        const snapshot = await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        setAchievementUrlList((prev: any) => [...prev, downloadURL]);
        console.log("File uploaded successfully:", downloadURL);
      } catch (error) {
        console.error("Error uploading1 file:", error);
      }
    }
  };

  const videoHandler = (e: any) => {
    const file1 = e.target.files[0];
    setVideo1(file1);
    const file2 = e.target.files[1];
    setVideo2(file2);
    const file3 = e.target.files[2];
    setVideo3(file3);
    console.log("file1,file2", file1, file2, file3);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            {mainSection} {midSection && "/"} {midSection} {childSection && "/"}{" "}
            {childSection}
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This Contents will be displayed publicly so be careful what you
            share.
          </p>

          <div className="mt-10 gap-x-6 gap-y-8">
            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Choose Section
              </label>
              <div className="mt-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  onChange={(e: any) => setSec(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  {midSection === "Disaster Management" ? (
                    disasterManagementLst.map((i, index) => (
                      <option key={index}>{i}</option>
                    ))
                  ) : midSection === "Health Care" ? (
                    healthCareLst.map((i, index) => (
                      <option key={index}>{i}</option>
                    ))
                  ) : midSection === "Environment Department" ? (
                    environmentDepartmentLst.map((i, index) => (
                      <option key={index}>{i}</option>
                    ))
                  ) : (
                    <>
                      <option>Select Section</option>
                      <option>{childSection}</option>
                    </>
                  )}
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Contents
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  value={text}
                  onChange={(e: any) => setText(e.target.value)}
                  rows={3}
                  className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  // defaultValue={""}
                />
              </div>
            </div>

            {/* <div className="col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon
                  className="h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <button
                  type="button"
                  className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
            </div> */}

            {/* Banner photos */}
            {mainSection === "Our Department" && (
              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Banner photo
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="banner-file"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="banner-file"
                          name="banner-file"
                          type="file"
                          onChange={bannerPhotoHandler}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* heroSec photos */}
            {mainSection === "Our Department" && (
              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Hero Section photo
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="hero-file"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="hero-file"
                          name="hero-file"
                          type="file"
                          onChange={heroPhotoHandler}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Header photos */}
            {mainSection !== "Our Department" &&
              mainSection !== "Main Page" && (
                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Header photos
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            multiple
                            onChange={photoHandler}
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              )}

            {/* Down Videos photos */}
            {midSection === "Disaster Management" ||
              midSection === "Health Care" ||
              (midSection === "Environment Department" && (
                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Upload Two Images Down to Video
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            multiple
                            onChange={photoHandler}
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            {/* Videos */}
            {mainSection !== "Donations" && mainSection !== "Main Page" && (
              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  {mainSection === "Our Department" ? `Video` : "Videos"}
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload1"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload1"
                          name="file-upload1"
                          type="file"
                          multiple
                          accept="video/*"
                          onChange={videoHandler}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      mp3, webm up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* Slider Photos */}
            {mainSection !== "Donations" && mainSection !== "Main Page" && (
              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Slider photos
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload2"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>

                        <input
                          id="file-upload2"
                          name="file-upload2"
                          type="file"
                          multiple
                          onChange={sliderPhotosHandler}
                          className="sr-only"
                        />
                      </label>
                      {!uploading1 ? (
                        <>
                          <p className="pl-1">or drag and drop</p>
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </>
                      ) : (
                        <div className="flex flex-wrap gap-5">
                          <PropagateLoader
                            color={"#36d7b7"}
                            loading={uploading1}
                            size={20}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                          />
                          <p className="text-teal-500">uploading1 Images ...</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Main Page */}
            {/* banner Slider images */}
            {mainSection === "Main Page" && (
              <div className="col-span-full">
                <label
                  htmlFor="main-banner-slider"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Main Banner Slider photos
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="main-banner-slider"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="main-banner-slider"
                          name="main-banner-slider"
                          type="file"
                          multiple
                          onChange={sliderPhotosHandler}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* our department slider images */}
            {mainSection === "Main Page" && (
              <div className="col-span-full">
                <label
                  htmlFor="our-department"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Our Department Slider photos
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="our-department"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="our-department"
                          name="our-department"
                          type="file"
                          multiple
                          onChange={ourDepartmentSliderPhotosHandler}
                          className="sr-only"
                        />
                      </label>
                      {!uploadingOurDepartmentSlider ? (
                        <>
                          <p className="pl-1">or drag and drop</p>
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </>
                      ) : (
                        <div className="flex flex-wrap gap-5">
                          <PropagateLoader
                            color={"#36d7b7"}
                            loading={uploadingOurDepartmentSlider}
                            size={20}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                          />
                          <p className="text-teal-500">uploading1 Images ...</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* appeal sliders */}
            {mainSection === "Main Page" && (
              <h2 className="block text-base py-3 font-medium leading-6 text-gray-900">
                Appeals Sliders
              </h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {/* ramazan slider */}
              {mainSection === "Main Page" && (
                <div className="">
                  <div className="col-span-full">
                    <label
                      htmlFor="our-department"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Ramadan Slider photos
                    </label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <div className="text-center">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="our-department"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="our-department"
                              name="our-department"
                              type="file"
                              multiple
                              onChange={ramzanSliderPhotosHandler}
                              className="sr-only"
                            />
                          </label>
                          {!uploadingRamzanSlider ? (
                            <>
                              <p className="pl-1">or drag and drop</p>
                              <p className="text-xs leading-5 text-gray-600">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </>
                          ) : (
                            <div className="flex flex-wrap gap-5">
                              <PropagateLoader
                                color={"#36d7b7"}
                                loading={uploadingRamzanSlider}
                                size={12}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                              />
                              <p className="text-teal-500 text-sm">
                                uploading Images ...
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* zakat slider */}
              {mainSection === "Main Page" && (
                <div className="">
                  <div className="col-span-full">
                    <label
                      htmlFor="our-department"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Zakat Slider photos
                    </label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <div className="text-center">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="our-department"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="our-department"
                              name="our-department"
                              type="file"
                              multiple
                              onChange={zakatSliderPhotosHandler}
                              className="sr-only"
                            />
                          </label>
                          {!uploadingZakatSlider ? (
                            <>
                              <p className="pl-1">or drag and drop</p>
                              <p className="text-xs leading-5 text-gray-600">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </>
                          ) : (
                            <div className="flex flex-wrap gap-5">
                              <PropagateLoader
                                color={"#36d7b7"}
                                loading={uploadingZakatSlider}
                                size={12}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                              />
                              <p className="text-teal-500 text-sm">
                                uploading Images ...
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Food Box slider */}
              {mainSection === "Main Page" && (
                <div className="">
                  <div className="col-span-full">
                    <label
                      htmlFor="our-department"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Food Box Slider photos
                    </label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <div className="text-center">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="our-department"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="our-department"
                              name="our-department"
                              type="file"
                              multiple
                              onChange={foodBoxSliderPhotosHandler}
                              className="sr-only"
                            />
                          </label>
                          {!uploadingFoodBoxSlider ? (
                            <>
                              <p className="pl-1">or drag and drop</p>
                              <p className="text-xs leading-5 text-gray-600">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </>
                          ) : (
                            <div className="flex flex-wrap gap-5">
                              <PropagateLoader
                                color={"#36d7b7"}
                                loading={uploadingFoodBoxSlider}
                                size={12}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                              />
                              <p className="text-teal-500 text-sm">
                                uploading Images ...
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Winter  slider */}
              {mainSection === "Main Page" && (
                <div className="">
                  <div className="col-span-full">
                    <label
                      htmlFor="our-department"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Winter Slider photos
                    </label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <div className="text-center">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="our-department"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="our-department"
                              name="our-department"
                              type="file"
                              multiple
                              onChange={winterSliderPhotosHandler}
                              className="sr-only"
                            />
                          </label>
                          {!uploadingWinterSlider ? (
                            <>
                              <p className="pl-1">or drag and drop</p>
                              <p className="text-xs leading-5 text-gray-600">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </>
                          ) : (
                            <div className="flex flex-wrap gap-5">
                              <PropagateLoader
                                color={"#36d7b7"}
                                loading={uploadingWinterSlider}
                                size={12}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                              />
                              <p className="text-teal-500 text-sm">
                                uploading Images ...
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* palestine  slider */}
              {mainSection === "Main Page" && (
                <div className="">
                  <div className="col-span-full">
                    <label
                      htmlFor="our-department"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Palestine Slider photos
                    </label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <div className="text-center">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="our-department"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="our-department"
                              name="our-department"
                              type="file"
                              multiple
                              onChange={palestineSliderPhotosHandler}
                              className="sr-only"
                            />
                          </label>
                          {!uploadingPalestineSlider ? (
                            <>
                              <p className="pl-1">or drag and drop</p>
                              <p className="text-xs leading-5 text-gray-600">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </>
                          ) : (
                            <div className="flex flex-wrap gap-5">
                              <PropagateLoader
                                color={"#36d7b7"}
                                loading={uploadingPalestineSlider}
                                size={12}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                              />
                              <p className="text-teal-500 text-sm">
                                uploading Images ...
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* orphan  slider */}
              {mainSection === "Main Page" && (
                <div className="">
                  <div className="col-span-full">
                    <label
                      htmlFor="our-department"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Orphan Slider photos
                    </label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <div className="text-center">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="our-department"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="our-department"
                              name="our-department"
                              type="file"
                              multiple
                              onChange={orphanSliderPhotosHandler}
                              className="sr-only"
                            />
                          </label>
                          {!uploadingOrphanSlider ? (
                            <>
                              <p className="pl-1">or drag and drop</p>
                              <p className="text-xs leading-5 text-gray-600">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </>
                          ) : (
                            <div className="flex flex-wrap gap-5">
                              <PropagateLoader
                                color={"#36d7b7"}
                                loading={uploadingOrphanSlider}
                                size={12}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                              />
                              <p className="text-teal-500 text-sm">
                                uploading Images ...
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Hand Pump slider */}
              {mainSection === "Main Page" && (
                <div className="">
                  <div className="col-span-full">
                    <label
                      htmlFor="our-department"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Hand Pump Slider photos
                    </label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <div className="text-center">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="our-department"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="our-department"
                              name="our-department"
                              type="file"
                              multiple
                              onChange={handPumpSliderPhotosHandler}
                              className="sr-only"
                            />
                          </label>
                          {!uploadingHandPumpSlider ? (
                            <>
                              <p className="pl-1">or drag and drop</p>
                              <p className="text-xs leading-5 text-gray-600">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </>
                          ) : (
                            <div className="flex flex-wrap gap-5">
                              <PropagateLoader
                                color={"#36d7b7"}
                                loading={uploadingHandPumpSlider}
                                size={12}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                              />
                              <p className="text-teal-500 text-sm">
                                uploading Images ...
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/*Water Well slider */}
              {mainSection === "Main Page" && (
                <div className="">
                  <div className="col-span-full">
                    <label
                      htmlFor="our-department"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Water Well Slider photos
                    </label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <div className="text-center">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="our-department"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="our-department"
                              name="our-department"
                              type="file"
                              multiple
                              onChange={waterWellSliderPhotosHandler}
                              className="sr-only"
                            />
                          </label>
                          {!uploadingWaterWellSlider ? (
                            <>
                              <p className="pl-1">or drag and drop</p>
                              <p className="text-xs leading-5 text-gray-600">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </>
                          ) : (
                            <div className="flex flex-wrap gap-5">
                              <PropagateLoader
                                color={"#36d7b7"}
                                loading={uploadingWaterWellSlider}
                                size={12}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                              />
                              <p className="text-teal-500 text-sm">
                                uploading Images ...
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/*Masjid slider */}
              {mainSection === "Main Page" && (
                <div className="">
                  <div className="col-span-full">
                    <label
                      htmlFor="our-department"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Masjid Slider photos
                    </label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <div className="text-center">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="our-department"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="our-department"
                              name="our-department"
                              type="file"
                              multiple
                              onChange={masjidSliderPhotosHandler}
                              className="sr-only"
                            />
                          </label>
                          {!uploadingMasjidSlider ? (
                            <>
                              <p className="pl-1">or drag and drop</p>
                              <p className="text-xs leading-5 text-gray-600">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </>
                          ) : (
                            <div className="flex flex-wrap gap-5">
                              <PropagateLoader
                                color={"#36d7b7"}
                                loading={uploadingMasjidSlider}
                                size={12}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                              />
                              <p className="text-teal-500 text-sm">
                                uploading Images ...
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Achievements */}
            {mainSection == "Main Page" && (
              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Achievements photos
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          multiple
                          onChange={achievementPhotosHandler}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* counter */}
            {mainSection == "Main Page" ? (
              <>
                <h2 className="pb-4">Counters</h2>
                <div className="flex gap-4 pb-4">
                  <div className="relative h-10 w-full min-w-[200px] ">
                    <input
                      type="text"
                      placeholder="Title"
                      className="peer h-full w-full rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
                    />
                  </div>
                  <div className="relative h-10 w-full min-w-[200px] ">
                    <input
                      type="number"
                      placeholder="Counter"
                      className="peer h-full w-full rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="relative h-10 w-full min-w-[200px] ">
                    <input
                      type="text"
                      placeholder="Title"
                      className="peer h-full w-full rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
                    />
                  </div>
                  <div className="relative h-10 w-full min-w-[200px] ">
                    <input
                      type="number"
                      placeholder="Counter"
                      className="peer h-full w-full rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
                    />
                  </div>
                </div>
              </>
            ) : null}

            {/* Gallery */}
            {mainSection == "Main Page" && (
              <div className="col-span-full">
                <label
                  htmlFor="gallery"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Gallery photos
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="gallery"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="gallery"
                          name="gallery"
                          type="file"
                          multiple
                          onChange={gallerySliderPhotosHandler}
                          className="sr-only"
                        />
                      </label>
                      {!uploadingGallerySlider ? (
                        <>
                          <p className="pl-1">or drag and drop</p>
                          <p className="text-xs leading-5 text-gray-600">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </>
                      ) : (
                        <div className="flex flex-wrap gap-5">
                          <PropagateLoader
                            color={"#36d7b7"}
                            loading={uploadingGallerySlider}
                            size={12}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                          />
                          <p className="text-teal-500 text-sm">
                            uploading Images ...
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Back Text"
                  className="peer h-full w-full rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50"
                />
              </div>
            )}
            {/* News Videos */}
            {mainSection === "Main Page" && (
              <div className="col-span-full">
                <label
                  htmlFor="news-video"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  News Videos
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="slider-videos"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="slider-videos"
                          name="slider-videos"
                          type="file"
                          multiple
                          accept="video/*"
                          onChange={videoHandler}
                          className="sr-only"
                        />
                      </label>
                      {!uploadingVideosSlider ? (
                        <>
                          <p className="pl-1">or drag and drop</p>
                          <p className="text-xs leading-5 text-gray-600">
                            mp4, other up to 100MB
                          </p>
                        </>
                      ) : (
                        <div className="flex flex-wrap gap-5">
                          <PropagateLoader
                            color={"#36d7b7"}
                            loading={uploadingVideosSlider}
                            size={12}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                          />
                          <p className="text-teal-500 text-sm">
                            uploading Images ...
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* News Slider Videos */}
            {mainSection === "Main Page" && (
              <div className="col-span-full">
                <label
                  htmlFor="slider-videos"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  News Slider Videos
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="slider-videos"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="slider-videos"
                          name="slider-videos"
                          type="file"
                          multiple
                          accept="video/*"
                          onChange={sliderVideosHandler}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      mp3, webm up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-teal-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Update
        </button>
      </div>
    </form>
  );
}
