export const FullPageLoader = () => {
    return (
      <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 1000, backgroundColor: "rgba(255, 255, 255, 0.9)", display: "flex", justifyContent: "center", alignItems: "center" }}>
        Loading Model...
        {/* You can add more sophisticated loading indicators here */}
      </div>
    );
  };