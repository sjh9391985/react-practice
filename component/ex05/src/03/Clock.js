import React, {Component} from 'react';
import './assets/scss/Clock.scss';

export default class Clock extends Component {

    constructor(){
        super(...arguments)
        this.state = {
            d: new Date(),
            session: "am"
        }
    }

    componentWillUnmount(){ //종료되면 반복하는것도 클리어시키기
        clearInterval(this.timeID)
    }
    
    Change(){  //시계 구현
        this.setState({
            d : new Date(),
        })
    }

    render() {
        return (
            <div className="clock-field">

                <div className="numbers">
                    <p className="hours">{this.state.d.getHours()}</p>
                    <p className="placeholder"></p>
                </div>

                <div className="colon">
                    <p>:</p>
                </div>

                <div className="numbers">
                    <p className="minutes">{this.state.d.getMinutes()}</p>
                    <p className="placeholder"></p>
                </div>

                <div className="colon">
                    <p>:</p>
                </div>

                <div className="numbers">
                    <p className="seconds">{this.state.d.getSeconds()}</p>
                    <p className="placeholder"></p>
                </div>

                <div className="am-pm">
                    <div>
                        <p className={this.state.session === "am"? 'on' : 'off'}>am</p>
                    </div>
                    <div>
                        <p className={this.state.session != "am"? 'off' : 'on'}>pm</p>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() { // Clockcmp 컴포넌트가 불러올때마다 1초씩 this.Change()를 부른다 
        this.timeID = setInterval(
            () => this.Change()
            ,1000
            )
    }

}