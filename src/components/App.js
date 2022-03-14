import React, { useState } from "react";
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import './style.css'


const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState({
    username: ""
  })
  const [list, setList] = useState([])
  const [currentId, setCurrentId] = useState("")

  const handleInput = (e) => {
    const value = e.target.value;
    setData({ username: value });
  }

  //recive data
  const handleSubmit = (id) => {
    let currentIndex = false;
    let newObject;
    list.map((obj, index) => {
      if (obj.id == id) {
        currentIndex = true;
        newObject = { username: [...obj.username, data.username], id: id }
      }
    })
    if (!currentIndex) {
      newObject = { username: [data.username], id: id }
    }
    setList([...list, newObject])
    setData({ username: "" })
  }

  const showModal = (id) => {
    setCurrentId(id)
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const displyButton = (id) => {
    let text
    list.map((currElem) => {
      if (currElem.id == id)
        text = currElem.username.join(", ")
    })
    if (!text) {
      text = "Insert yout desired text here"
    }
    return text;
  }

  return (
    //passing data
    <>
      <h1 className="Heading-1">03 May 2021</h1>
      <h3 className="Heading-2">Monday</h3>
      <div id="main">
        <div className="Time" >
          <div className="forLabel">
            <label>00:00</label>
            <Button className='Button-1 color-1' type="primary" onClick={() => showModal(1)}>
              {
                displyButton(1)
              }
            </Button>
          </div>


          <div className="forLabel">
            <label>01:00</label>
            <Button className='Button-1 color-2' type="primary" onClick={() => showModal(2)}>
              {
                displyButton(2)
              }
            </Button>
          </div>

          <div className="forLabel">
            <label>02:00</label>
            <Button className='Button-1 color-3' type="primary" onClick={() => showModal(3)}>
              {
                displyButton(3)
              }
            </Button>
          </div>

          <div className="forLabel">
            <label>03:00</label>
            <Button className='Button-1 color-4' type="primary" onClick={() => showModal(4)}>
              {
                displyButton(4)
              }
            </Button>
          </div>

          <div className="forLabel">
            <label>04:00</label>
            <Button className='Button-1 color-5' type="primary" onClick={() => showModal(5)}>
              {
                displyButton(5)
              }
            </Button>
          </div>

          <div className="forLabel">
            <label>05:00</label>
            <Button className='Button-1 color-1' type="primary" onClick={() => showModal(6)}>
              {
                displyButton(6)
              }
            </Button>
          </div>

          <div className="forLabel">
            <label>06:00</label>
            <Button className='Button-1 color-2' type="primary" onClick={() => showModal(7)}>
              {
                displyButton(7)
              }
            </Button>
          </div>

          <div className="forLabel">
            <label>07:00</label>
            <Button className='Button-1 color-3' type="primary" onClick={() => showModal(8)}>
              {
                displyButton(8)
              }
            </Button>
          </div>

          <div className="forLabel">
            <label>08:00</label>
            <Button className='Button-1 color-4' type="primary" onClick={() => showModal(9)}>
              {
                displyButton(9)
              }
            </Button>
          </div>

          <div className="forLabel">
            <label>09:00</label>
            <Button className='Button-1 color-5' type="primary" onClick={() => showModal(10)}>
              {
                displyButton(10)
              }
            </Button>
          </div>

          <div className="forLabel">
            <label>10:00</label>
            <Button className='Button-1 color-1' type="primary" onClick={() => showModal(11)}>
              {
                displyButton(11)
              }
            </Button>
          </div>

          <div className="forLabel">
            <label>11:00</label>
            <Button className='Button-1 color-2' type="primary" onClick={() => showModal(12)}>
              {
                displyButton(12)
              }
            </Button>
          </div>
        </div>

        <div className="Time">
          <div className="forLabel">
            <label>12:00</label>
            <Button className='Button-1 color-3' type="primary" onClick={() => showModal(13)}>
              {
                displyButton(13)
              }
            </Button>
          </div>

          <div className="forLabel">
            <label>13:00</label>
            <Button className='Button-1 color-4' type="primary" onClick={() => showModal(14)}>
              {
                displyButton(14)
              }
            </Button>
          </div>

          <div className="forLabel">
            <label>14:00</label>
            <Button className='Button-1 color-5' type="primary" onClick={() => showModal(15)}>
              {
                displyButton(15)
              }
            </Button>
          </div>

          <div className="forLabel">
            <label>15:00</label>
            <Button className='Button-1 color-1' type="primary" onClick={() => showModal(16)}>
              {
                displyButton(16)
              }
            </Button>
          </div>

          <div className="forLabel">
            <label>16:00</label>
            <Button className='Button-1 color-2' type="primary" onClick={() => showModal(17)}>
              {
                displyButton(17)
              }
            </Button>
          </div>

          <div className="forLabel">
            <label>17:00</label>
            <Button className='Button-1 color-3' type="primary" onClick={() => showModal(18)}>
              {
                displyButton(18)
              }
            </Button>
          </div>

          <div className="forLabel">
            <label>18:00</label>
            <Button className='Button-1 color-4' type="primary" onClick={() => showModal(19)}>
              {
                displyButton(19)
              }
            </Button>
          </div>

          <div className="forLabel">
            <label>19:00</label>
            <Button className='Button-1 color-5' type="primary" onClick={() => showModal(20)}>
              {
                displyButton(20)
              }
            </Button>
          </div>

          <div className="forLabel">
            <label>20:00</label>
            <Button className='Button-1 color-1' type="primary" onClick={() => showModal(21)}>
              {
                displyButton(21)
              }
            </Button>
          </div>

          <div className="forLabel">
            <label>21:00</label>
            <Button className='Button-1 color-2' type="primary" onClick={() => showModal(22)}>
              {
                displyButton(22)
              }
            </Button>
          </div>

          <div className="forLabel">
            <label>22:00</label>
            <Button className='Button-1 color-3' type="primary" onClick={() => showModal(23)}>
              {
                displyButton(23)
              }
            </Button>
          </div>

          <div className="forLabel">
            <label>23:00</label>
            <Button className='Button-1 color-4' type="primary" onClick={() => showModal(24)}>
              {
                displyButton(24)
              }
            </Button>
          </div>
        </div>
      </div>


      <Modal title="Add Your List Here" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {/* <label htmlFor="UserName">Fullname</labsel> */}
        <input type="text" autoComplete="off"
          value={data.username}
          onChange={handleInput}
          name="username" id="username" />
        <button onClick={() => handleSubmit(currentId)} type="submit">Add</button>
        <div>
          {
            list.map((currElem) => {
              if (currentId == currElem.id) {
                return (
                  <li>{currElem.username[currElem.username.length - 1]}</li>
                )
              }
            })

            
          }
        </div>
      </Modal>


    </>
  )
}

export default App;