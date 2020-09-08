import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>({
	container: {
    paddingLeft: "5%",
    paddingRight:"5%"
  },
  title: {
    color: 'white',
    fontSize : 60,
  },
  root: {
    flexGrow: 1,
    backgroundColor: "#2A667B",
    paddingLeft: 100,
    paddingRight: 100
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tab: {
    // width: "10px",
    color: "white"
  }
}))
export default {useStyles};