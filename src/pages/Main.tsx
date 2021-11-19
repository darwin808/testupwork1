import React, { useState } from "react";
import pic1 from "../assets/Group 22.png";
import pic2 from "../assets/Group.png";
import pic3 from "../assets/Rectangle 29.png";
import "./main.styles.scss";
const Main = () => {
  const [owner, setowner] = useState(true);
  const [bids, setbids] = useState(false);
  const [history, sethistory] = useState(false);
  const handleOwner = () => {
    setowner(true);
    setbids(false);
    sethistory(false);
  };
  const handleBids = () => {
    setowner(false);
    setbids(true);
    sethistory(false);
  };
  const handleHistory = () => {
    setowner(false);
    setbids(false);
    sethistory(true);
  };
  return (
    <div style={{ display: "flex", background: "#f6fcfe" }}>
      <div style={{ padding: "5rem 2rem" }}>
        <img src={pic3} alt="" />
      </div>
      <div className="main-container">
        <div className="header">SPIRIT SEED - SYTHETIC</div>

        <div className="header2-container">
          <div className="left">
            <div className="items">
              <span className="items-span1">On Sale for: </span>
              <span className="item-span2">250 ETH</span>
            </div>
            <div className="items">
              <span className="items-span1">Tesselation Class</span>
            </div>
            <div className="items">
              <span className="items-span1">Seed</span>
            </div>
          </div>
          <div className="left">
            <div className="items">
              <span className="items-span1">Highest Bid: </span>
              <span className="item-span2">1.123 WETH</span>
            </div>
            <div className="items">
              <span className="NA">NA</span>
            </div>
            <div className="items">
              <span className="synthetic">Synthetic</span>
            </div>
          </div>
        </div>
        <div className="header3-container">
          Synthetic Seeds cannot be bought on the primary market and can only be
          earned or gifted. Synthetic Seeds do not belong to <br /> any
          Tessellation Class, cannot be incubated and are not eligible to be...{" "}
          <span className="Read">Read more</span>
        </div>
        <div className="header4-container">
          <div className="left">
            <div className="items">Creator:</div>
            <div
              className="items"
              style={{ position: "relative", marginTop: "1rem" }}
            >
              <span className="owner" style={{ position: "relative" }}>
                <img src={pic1} alt="" />
                <div
                  className="pic2"
                  style={{ position: "absolute", right: 0, bottom: 0 }}
                >
                  <img src={pic2} alt="" />
                </div>
              </span>
            </div>
          </div>
          <div className="right">
            <div className="items">10% Royalties</div>
            <div
              className="items"
              style={{ color: "#333333", marginTop: "1.6rem" }}
            >
              Defacer#od
            </div>
          </div>
        </div>
        <div className="header5-container">
          <div className="header">
            <button
              className={`${owner ? "btn-active" : "btn"}`}
              onClick={handleOwner}
            >
              Owners
            </button>
            <button
              className={`${bids ? "btn-active" : "btn"}`}
              onClick={handleBids}
            >
              Bids
            </button>
            <button
              className={`${history ? "btn-active" : "btn"}`}
              onClick={handleHistory}
            >
              History
            </button>
          </div>
          <div className="body">
            <div className="">
              {owner && (
                <div style={{ display: "flex" }}>
                  <ProfilePic />
                  <div style={{ marginLeft: "1rem" }}>
                    <div
                      className=""
                      style={{ display: "flex", fontWeight: "800" }}
                    >
                      Defacer#od
                    </div>
                    <div
                      className=""
                      style={{ display: "flex", color: "#d3d3d3" }}
                    >
                      100 editions not for sale
                    </div>
                  </div>
                </div>
              )}
            </div>

            {bids && (
              <span
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                No active bids yet. Be the first to make a bid!
              </span>
            )}
            {history && (
              <div style={{ display: "flex" }}>
                <ProfilePic />
                <div style={{ marginLeft: "1rem" }}>
                  <div
                    className=""
                    style={{ display: "flex", fontWeight: "800" }}
                  >
                    Defacer#od
                  </div>
                  <div
                    className=""
                    style={{ display: "flex", color: "#d3d3d3" }}
                  >
                    08/11/2021, 12:44
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="header6-container">
          <div className="header">
            <button className="Place">Place a bid</button>
            <button className="Buy">Buy</button>
          </div>
          <div className="body">There's no bids yet. Be the first!</div>
        </div>
      </div>
    </div>
  );
};

export default Main;

const ProfilePic = () => {
  return (
    <span className="owner">
      <img src={pic1} alt="" />
      <div className="pic2">
        <img src={pic2} alt="" />
      </div>
    </span>
  );
};
