import React from 'react';

const IconSvg = ({id, width, height}) => {

    return (
        <svg width={width} height={height} className="svg">
            <use xlinkHref={`/assets/sprite.svg#${id}`} />
        </svg>
    )
}

export default IconSvg;