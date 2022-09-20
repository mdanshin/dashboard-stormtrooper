import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './new.scss'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from 'react';
import { IUser } from "../../models/IUser";
import { IProduct } from '../../models/IProduct';

interface props {
  inputs: IUser[] | IProduct[],
  title: string
}

function New({ inputs, title }: props) {

  const [file, setFile] = useState<File>()

  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="" />
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor='file'>Image: <DriveFolderUploadIcon className='icon' /></label>
                <input type="file" id='file' onChange={(e) => {
                  if (e.target.files) {
                    setFile(e.target.files[0])
                    return
                  }
                }} style={{ display: "none" }} />
              </div>
              {inputs.map((input) => {
                return (
                  <div className="formInput" key={input.id}>
                    <label htmlFor={input.label}>{input.label}</label>
                    <input type={input.type} id={input.label} placeholder={input.placeholder} />
                  </div>
                )
              })}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
