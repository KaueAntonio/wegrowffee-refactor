const useStyles = () => ({
  root: (bg: string, otherStyles: object) => ({
    ...otherStyles,
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  }),
});

export default useStyles;
