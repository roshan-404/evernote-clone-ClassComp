const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: 'calc(100px - 35px)',
    position: 'absolute',
    left: '0',
    width: '300px',
    boxShadow: '0px 0px 2px black'
  },
  titleInput: {
    borderRadius: '5px',
    height: '50px',
    boxSizing: 'border-box',
    border: 'none',
    padding: '5px',
    fontSize: '24px',
    width: 'calc(100% - 250px)',
    backgroundColor: '#FBBF24',
    color: 'white',
    paddingLeft: '50px'
  },
  editIcon: {
    position: 'absolute',
    padding: "10px",
    left: '260px',
    top: '12px',
    color: 'white',
    width: '10',
    height: '10'
  },
  editorContainer: {
    borderRadius: '10px',
    height: '100%',
    width: "100%",
    boxSizing: 'border-box'
  }
});

export default styles;