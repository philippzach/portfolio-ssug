import React, { Component } from 'react';
import '../styles/input.css';

class Input extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpened : false,
        }
        this.toggleBox = this.toggleBox.bind(this);
    }
    toggleBox() {
        //const { opened } = this.state;
        this.setState({
          opened: true,
        });
        /* const { opened } = this.state;
        this.setState({
          opened: !opened,
        }); */
      }
      render() {
        const { children } = this.props;
        const { opened } = this.state;
        return (
          <div>
            <div className="box">
                <div className="boxUnits">
                <div className="boxTitle" onClick={this.toggleBox}>
                    <span className="segmentation">I work at a innovative startup.</span>
                </div>
                </div>
                <div className="boxUnits">
                <div className="boxTitle" onClick={this.toggleBox}>
                    <span className="segmentation">I work for a major corporation.</span>
                </div>
                </div>
                <div className="boxUnits">
                <div className="boxTitle" onClick={this.toggleBox}>
                    <span className="segmentation">I am an angel investor or venture capitalist.</span>
                </div>
                </div>
            </div>
            {opened && (
              <div className="boxContent">
                {children}
              </div>
            )}
          </div>
        );
      }
    }

export default Input;