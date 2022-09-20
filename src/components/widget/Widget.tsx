import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonutlinedIcon from '@mui/icons-material/Person2Outlined';
// import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

function Widget({ type }: any) {
  let data: any

  //temporary
  const amount: any = 100
  const diff: any = 20

  switch (type) {

    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonutlinedIcon
            className='icon'
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0 , 0.2)"
            }} />
        )
      }
      break

    case "server":
      data = {
        title: "SERVERS",
        isMoney: true,
        link: "See all servers",
        icon: (
          <ShoppingCartOutlinedIcon
            className='icon'
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165, 32 , 0.2)"
            }} />
        )
      }
      break

    case "site":
      data = {
        title: "SITES",
        isMoney: false,
        link: "See all sites",
        icon: (
          <MonetizationOnOutlinedIcon
            className='icon'
            style={{
              color: "green",
              backgroundColor: "rgba(0, 128, 0 , 0.2)"
            }} />
        )
      }
      break

    default:
      break
  }

  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpOutlinedIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget