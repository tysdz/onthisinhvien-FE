import React, { Fragment } from "react";
import './NEUpage.css'
import Banner from "../layout-body/banner";
import Category from "../layout-body/category";
import Feedback from "../layout-body/feedback";
import Community from "../layout-body/community";

function NEUPage({ increaseCount }){
    return(
        <Fragment>
            <div className="container-neu">
                <div>
                    <Banner />
                </div>
                <div>
                    <Category increaseCount={increaseCount}/>
                </div>
                <div>
                    <Feedback />
                </div>
                <div>
                    <Community />
                </div>
            </div>
        </Fragment>
    )
}

export default NEUPage;