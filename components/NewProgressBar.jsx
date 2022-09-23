import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import Link from "next/link";


export default function NewProgressBar(props) {

    const {percent} = props

    const circleStyle = {
        width: 40,
        height: 40,
        borderRadius: 20,
        background: "white",
        display: "flex",
        justifyContent: 'center'
    }

    return (
        <div className="flex justify-center">
            <ProgressBar
                percent={percent}
                width={600}
                filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
            >
                <Step transition="scale">
                    {({ accomplished }) => (
                        <Link href="/box/personal">
                            <div style={circleStyle}>
                                <img
                                    alt="img"
                                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                                    width="20"
                                    src="/person.svg"
                                />
                            </div>
                        </Link>
                    )}
                </Step>
                <Step transition="scale">
                    {({ accomplished }) => (
                        <Link href="/box/experience">
                            <div style={circleStyle}>
                                <img
                                    alt="img"
                                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                                    width="20"
                                    src="/experience.svg"
                                />
                            </div>
                        </Link>
                    )}
                </Step>
                <Step transition="scale">
                    {({ accomplished }) => (
                        <Link href="/box/sample">
                            <div style={circleStyle}>
                                <img
                                    alt="img"
                                    style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                                    width="20"
                                    src="/sample.svg"
                                />
                            </div>
                        </Link>
                    )}
                </Step>
            </ProgressBar>
        </div>
    );
}
