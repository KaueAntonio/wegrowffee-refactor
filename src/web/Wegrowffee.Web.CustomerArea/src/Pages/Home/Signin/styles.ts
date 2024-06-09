const useStyles = () => ({
  root: {
    display: "flex",
    width: "300px",
    gap: "25px",
    "& .MuiInputBase-input": {
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      borderRadius: "10px",
    },
    "& .MuiButtonBase-root": {
        backgroundColor: 'rgba(46, 25, 20, 0.7)',
        color: 'white'
    },
  },
});

export default useStyles;
