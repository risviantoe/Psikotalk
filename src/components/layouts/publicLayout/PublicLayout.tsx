import React from "react";
import './PublicLayout.css'
import Button from '../../button/Button'

const PublicLayout: React.FC = (props) => {
    return (
        <div>
            <div className="header">
                <h1>My Website</h1>
                <p>Resize the browser window to see the effect.</p>
                {/* <Button>button button</Button>
                <Button>button button</Button>
                <Button>button button</Button>
                <Button>button button</Button>
                <Button>button button</Button> */}
            </div>

            <div className="topnav">
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#" style={{float: "right"}}>Link</a>
            </div>

            <div className="row">
                <div className="leftcolumn">
                    {props.children}
                </div>
                <div className="rightcolumn">
                    <div className="card">
                        <h2>About Me</h2>
                        <div className="fakeimg" style={{height: 100}}>Image</div>
                        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                    </div>
                    <div className="card">
                        <h3>Popular Post</h3>
                        <div className="fakeimg"><p>Image</p></div>
                        <div className="fakeimg"><p>Image</p></div>
                        <div className="fakeimg"><p>Image</p></div>
                    </div>
                    <div className="card">
                        <h3>Follow Me</h3>
                        <p>Some text..</p>
                    </div>
                </div>
            </div>

            <div className="footer">
                <h2>Footer</h2>
            </div>
        </div>
    )
}

export default PublicLayout
