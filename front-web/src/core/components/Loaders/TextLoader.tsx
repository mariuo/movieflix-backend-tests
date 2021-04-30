import React from "react";
import ContentLoader from "react-content-loader";

const TextLoader = () => (
    <ContentLoader
        speed={2}
        width={1024}
        height={300}
        viewBox="0 0 1024 300"
        backgroundColor="#8e7a43"
        foregroundColor="#525252"

    >
        <rect x="349" y="45" rx="3" ry="3" width="248" height="19" />
        <rect x="352" y="74" rx="3" ry="3" width="37" height="11" />
        <rect x="352" y="121" rx="3" ry="3" width="228" height="56" />
        <rect x="351" y="97" rx="3" ry="3" width="173" height="11" />
        <rect x="3" y="1" rx="0" ry="0" width="324" height="306" />
    </ContentLoader>
)


export default TextLoader;
