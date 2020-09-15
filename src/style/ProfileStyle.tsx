import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>({
  title: {
    color: 'white',
    fontSize : 60,
  },
  root: {
    paddingLeft: "10%",
    paddingRight: "10%",
		position: "absolute",
		zIndex: 0,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tab: {
    // width: "10px",
    color: "white"
  },
	alert: {
		position: "absolute",
		zIndex: 1,
		width: "99%",
	}
}))
export default {useStyles};