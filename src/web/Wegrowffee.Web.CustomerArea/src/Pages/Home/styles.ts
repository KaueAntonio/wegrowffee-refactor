import bgImage from "../../assets/coffebg.jpg";

const useStyles = () => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
  },
  container: {
    border: "2px solid black",
    borderRadius: "20px",
    width: "500px",
    height: "400px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
  },
});

export default useStyles;
