const useStyles = () => ({
  root: {
    display: "flex",
    flexDirecton: "row",
    gap: 2,
    paddingRight: "30px",
  },
  item: {
    padding: "5px",
    //color: 'white',
    borderRadius: "7px",
    ":hover": {
      backgroundColor: "rgba(200, 200, 200, 0.5)",
      cursor: "pointer",
    },
  },
});

export default useStyles;
