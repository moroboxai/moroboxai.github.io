import React from "react";
import { NextRouter, withRouter } from "next/router";
import TOC, { Structure } from "./TOC";
import Article from "./Article";
import styles from "./Learn.module.scss";

type LearnProps = {
    className?: string;
    baseUrl: string;
    structure: Structure;
    category?: string;
    article?: string;
    router: NextRouter;
};

class Learn extends React.Component<LearnProps> {
    static propTypes: any;

    constructor(props: any) {
        super(props);
    }

    render() {
        if (
            this.props.category !== undefined &&
            this.props.article === undefined
        ) {
            this.props.router.push(this.props.baseUrl);
            return;
        }

        return (
            <div className={[styles.section, "top-section"].join(" ")}>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <TOC
                                baseUrl={this.props.baseUrl}
                                structure={this.props.structure}
                            />
                        </div>
                        <div className="col">
                            <Article
                                structure={this.props.structure}
                                category={this.props.category}
                                article={this.props.article}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Learn.propTypes = {};

export default withRouter(Learn);
