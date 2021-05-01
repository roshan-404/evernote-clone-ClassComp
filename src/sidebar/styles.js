const styles = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      height: 'calc(100% - 35px)',
      position: 'absolute',
      left: '0',
      width: '300px',
      boxShadow: '0px 0px 2px black'
    },
    newChatBtn: {
      borderRadius: '0px'
    },
    unreadMessage: {
      color: 'red',
      position: 'absolute',
      top: '0',
      right: '5px'
    },
    newNoteBtn: {
      width: '100%',
      height: '35px',
      borderBottom: '1px solid black',
      borderRadius: '10px',
      fontWeight: "bold",
      backgroundColor: '#FBBF24',
      color: 'white',
      '&:hover': {
        backgroundColor: '#FCD34D'
      }
    },
    sidebarContainer: {
      marginTop: '0px',
      width: '250px',
      height: '100%',
      boxSizing: 'border-box',
      float: 'left',
      overflowY: 'scroll',
      borderRadius: '10px',
      overflowX: 'hidden'
    },
    newNoteInput: {
      width: '100%',
      margin: '0px',
      height: '35px',
      outline: 'none',
      border: 'none',
      borderRadius: '10px',
      paddingLeft: '5px',
      '&:focus': {
        outline: '2px solid rgba(81, 203, 238, 1)'
      }

    },
    newNoteSubmitBtn: {
      width: '100%',
      backgroundColor: '#10B981',
      borderRadius: '10px',
      fontWeight: "bold",
      color: 'white',
      '&:hover': {
        backgroundColor: '#34D399'
      }
    }
  });
  
  export default styles;