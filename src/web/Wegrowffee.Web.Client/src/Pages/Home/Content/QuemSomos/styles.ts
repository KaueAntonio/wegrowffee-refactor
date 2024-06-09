const useStyles = () => ({
  root: (bg: string) => ({
    width: "300px",
    height: "500px",
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }),
  content: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    height: '100px'
  },
  alinhamentoCards: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "90px",
  }
});

export default useStyles;
