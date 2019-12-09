import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
 
class ComponentToPrint extends React.Component {
  render() {
    return (
      <div>{this.props.data.name}</div>
    );
  }
}
 
const Print = (props) => {
  const componentRef = useRef();
  return (
    <div>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} data={props.location.state}/>
    </div>
  );
};


export default Print