/* eslint import/newline-after-import: "off" */
const Statistical : React.FC<React.PropsWithChildren> = () => {
  return (
    <div className="statistical">
      <div className="statistical-div">
        <div className="statistical-div-info">
          <div className="txt-title">220K+</div>
          <div className="txt-span">Contract creators</div>
        </div>
        <div className="statistical-div-info">
          <div className="txt-title">$110M</div>
          <div className="txt-span">Avg. daily gas saved</div>
        </div>
        <div className="statistical-div-info">
          <div className="txt-title">89</div>
          <div className="txt-span">Active validators</div>
        </div>
        <div className="statistical-div-info-2">
          <div className="txt-title">90M+</div>
          <div className="txt-span">Unique addresses</div>
        </div>
        <div className="statistical-div-info-2">
          <div className="txt-title">17.5K</div>
          <div className="txt-span">Delegators on PoS</div>
        </div>
        <div className="statistical-div-info-2">
          <div className="txt-title">4.9B+</div>
          <div className="txt-span">Total transactions</div>
        </div>
      </div>
      <img src="./img/awan_malam.png" alt="star3" className="img-statistical" />
    </div>
  );
};

export default Statistical;
