// react component 생성을 위해 react import
import React from 'react';
//
import PropTypes from 'prop-types';

const MyComponent = props => {
    const {name, children, favoriteNumber} = props;
    return <>
        <div>안녕하세요, 내 이름은 {name}입니다.</div>
        <div>칠드런은 {children} 입니다!</div>
        <div>제가 좋아하는 숫자는 {favoriteNumber} 입니다!</div>
    </>
};

MyComponent.defaultProps = {
    name: 'Node JS'
}

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};
export default MyComponent;