import React from "react";
import { BsLightning, BsLightningFill } from "react-icons/bs";
const ItemBox = () => {
  const Items = [
    {
      name: "women",
      imgScr:
        "https://img.ltwebstatic.com/images3_ach/2023/01/29/16749579176f585735b17d325ef8ae968dbb63f6e6.gif",
    },
    {
      name: "Men",
      imgScr:
        "https://img.ltwebstatic.com/images3_pi/2022/12/06/167030479069ff6e3cef51f5cdcfcae44bb7bde4b3_thumbnail_405x552.webp",
    },
    {
      name: "Girls",
      imgScr:
        "https://img.ltwebstatic.com/images3_pi/2022/09/01/1661997514c3ac7699121dbc240256d8661a6c885d_thumbnail_405x552.webp",
    },
    {
      name: "Boys",
      imgScr:
        "https://img.ltwebstatic.com/images3_pi/2022/11/11/1668142502ba310af3959275a9389ede1d61fce0c3_thumbnail_405x552.webp",
    },
    {
      name: "Mobiles",
      imgScr:
        "https://img.ltwebstatic.com/images3_pi/2022/10/14/1665713643229e94c37d0af5a143411aff323fa26c_thumbnail_405x552.webp",
    },
    {
      name: "Girls",
      imgScr:
        "https://img.ltwebstatic.com/images3_pi/2022/09/01/1661997514c3ac7699121dbc240256d8661a6c885d_thumbnail_405x552.webp",
    },
    {
      name: "bikni",
      imgScr:
        "https://img.ltwebstatic.com/images3_pi/2023/01/05/1672889769111c34aabf8f97fe7457de80264c642d_thumbnail_405x552.webp",
    },
    {
      name: "Mobiles",
      imgScr:
        "https://img.ltwebstatic.com/images3_pi/2022/10/14/1665713643229e94c37d0af5a143411aff323fa26c_thumbnail_405x552.webp",
    },
    {
      name: "beauty",
      imgScr:
        "https://img.ltwebstatic.com/images3_pi/2022/12/29/16723013282d7685e46cd8008cef2a058717089965_thumbnail_405x552.webp",
    },
    {
      name: "bikni",
      imgScr:
        "https://img.ltwebstatic.com/images3_pi/2023/01/05/1672889769111c34aabf8f97fe7457de80264c642d_thumbnail_405x552.webp",
    },
    {
      name: "women",
      imgScr:
        "https://img.ltwebstatic.com/images3_ach/2023/01/29/16749579176f585735b17d325ef8ae968dbb63f6e6.gif",
    },
    {
      name: "Men",
      imgScr:
        "https://img.ltwebstatic.com/images3_pi/2022/12/06/167030479069ff6e3cef51f5cdcfcae44bb7bde4b3_thumbnail_405x552.webp",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="box">
          {Items.map((item, id) => (
            <Item key={id} name={item.name} img={item.imgScr} />
          ))}
        </div>
        <img
          className="image"
          src="https://img.ltwebstatic.com/images3_ach/2023/02/13/16762726482e008ef574e9ef8764c729de83ae2415_thumbnail_1920x.webp"
          alt=""
        />
        <div className="sale">
          <main>
            <h2>flash sale</h2>
            <div>
              <h2>Ends in</h2>
              <button>07</button>:<button>18</button>:<button>58</button>
            </div>
          </main>
          <div className="card">
            <div className="highlight">
              <div>
                <button className="btn">
           <BsLightningFill/>
           <span> -20% </span>
                </button>
                <img
                  src="https://img.ltwebstatic.com/images3_pi/2022/03/15/1647337294edfd64699e8bb6c725bb0b826d58faee_thumbnail_405x552.webp"
                  alt=""
                />
              </div>
              <div className="details">
                <p>
                  $3 <span>$4.99</span>
                </p>
                <div>
                  <div></div>
                </div>
                <p className="sold">44% Sold</p>
              </div>
            </div>
            <div className="highlight">
              <div>
                <button className="btn">
           <BsLightningFill/>
           <span> -51% </span>
                </button>
                <img
                  src="https://img.ltwebstatic.com/images3_pi/2022/09/26/16641550692714d6d6575867d69bd8c347f6fc64b9_thumbnail_405x552.webp"
                  alt=""
                />
              </div>
              <div className="details">
                <p>
                  $9 <span>$18.99</span>
                </p>
                <div className="bar">
                  <div></div>
                </div>
                <p className="sold">50% Sold</p>
              </div>
            </div>
            <div className="highlight">
              <div>
                <button className="btn">
           <BsLightningFill/>
           <span> -53% </span>
                </button>
                <img
                  src="https://img.ltwebstatic.com/images3_pi/2022/05/27/16536226499ae326293f528d1ebe3bffd2960a6caf_thumbnail_405x552.webp"
                  alt=""
                />
              </div>
              <div className="details">
                <p>
                  $61.59 <span>$88</span>
                </p>
                <div className="bar">
                  <div></div>
                </div>
                <p className="sold">25% Sold</p>
              </div>
            </div>
            <div className="highlight">
              <div>
                <button className="btn">
           <BsLightningFill/>
           <span> -34% </span>
                </button>
                <img
                  src="https://img.ltwebstatic.com/images3_pi/2023/01/18/16740120357bb2ac67b32bc7551b78cd2a4d67c721_thumbnail_405x552.webp"
                  alt=""
                />
              </div>
              <div className="details">
                <p>
                  $3.9 <span>$4.9</span>
                </p>
                <div className="bar">
                  <div></div>
                </div>
                <p className="sold">75% Sold</p>
              </div>
            </div>
            <div className="highlight">
              <div>
                <button className="btn">
           <BsLightningFill/>
           <span> -90% </span>
                </button>
                <img
                  src="https://img.ltwebstatic.com/images3_pi/2023/01/07/1673073025b9cf1cc8c33a810bf75e4488982e3389_thumbnail_405x552.webp"
                  alt=""
                />
              </div>
              <div className="details">
                <p>
                  $2.99 <span>$89</span>
                </p>
                <div className="bar">
                  <div></div>
                </div>
                <p className="sold">88% Sold</p>
              </div>
            </div>
            <div className="highlight">
              <div>
                <button className="btn">
           <BsLightningFill/>
           <span> -48% </span>
                </button>
                <img
                  src="https://img.ltwebstatic.com/images3_pi/2022/07/13/16576837480c1ab266885b20669d1601dad035cd34_thumbnail_405x552.webp"
                  alt=""
                />
              </div>
              <div className="details">
                <p>
                  $1.9 <span>$8.99</span>
                </p>
                <div>
                  <div></div>
                </div>
                <p className="sold">39% Sold</p>
              </div>
            </div>
      
          </div>
        </div>
        <img className="image" src="https://img.ltwebstatic.com/images3_ach/2023/02/16/167652695414456112ef5ae07338d2cf284c25fee8.gif" alt="" />
      </div>
    </>
  );
};

export default ItemBox;

const Item = ({ name, img }) => {
  return (
    <>
      <div className="item">
        <img src={img} alt="" />
        <h2>{name}</h2>
      </div>
    </>
  );
};
