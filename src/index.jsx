import PropTypes from "prop-types";
import React, { PureComponent } from "react";

// const defaultAnchor = { x: 0.5, y: 0.5 };
const defaultBorderColor = "#f00";
const defaultInnerColor = "#00ff00";
const defaultBorderStyle = "solid";
const defaultBorderWidth = 1;

const optionalStyleProps = {
	borderColor: PropTypes.string,
	innerColor: PropTypes.string,
	borderStyle: PropTypes.string,
	borderWidth: PropTypes.number,
	className: PropTypes.string,
	zIndex: PropTypes.number
};

export default class Line extends PureComponent {
	componentDidMount() {
		// Append rendered DOM element to the container the
		// offsets were calculated for
		this.within.appendChild(this.el);
	}

	componentWillUnmount() {
		this.within.removeChild(this.el);
	}

	findElement(className) {
		return document.getElementsByClassName(className)[0];
	}

	render() {
		const { x0, y0, x1, y1, progress, within = "" } = this.props;

		this.within = within ? this.findElement(within) : document.body;

		const dy = y1 - y0;
		const dx = x1 - x0;

		const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
		const length = Math.sqrt(dx * dx + dy * dy);

		const positionStyle = {
			position: "absolute",
			top: `${y0}px`,
			left: `${x0}px`,
			width: `${length}px`,
			zIndex: Number.isFinite(this.props.zIndex) ? String(this.props.zIndex) : "1",
			transform: `rotate(${angle}deg)`,
			// Rotate around (x0, y0)
			transformOrigin: "0 0"
		};

		const progressStyle = {
			position: "absolute",
			top: `${y0}px`,
			left: `${x0}px`,
			zIndex: Number.isFinite(this.props.zIndex) ? String(this.props.zIndex + 1) : "2",
			transform: `rotate(${angle}deg)`,
			// Rotate around (x0, y0)
			transformOrigin: "0 0",
			width: `${length * (progress / 100)}px`
			// color: this.props.progressColor || "#00FF00"
		};

		const defaultStyle = {
			borderColor: this.props.borderColor || defaultBorderColor,
			borderStyle: this.props.borderStyle || defaultBorderStyle,
			borderWidth: this.props.borderWidth || defaultBorderWidth
		};

		const defaultProgressStyle = {
			borderColor: this.props.innerColor || defaultInnerColor,
			borderStyle: this.props.borderStyle || defaultBorderStyle,
			borderWidth: this.props.borderWidth || defaultBorderWidth
		};

		const props = {
			className: this.props.className,
			style: Object.assign({}, defaultStyle, positionStyle)
		};

		const progressProps = {
			className: this.props.progressClassName,
			style: Object.assign({}, defaultProgressStyle, progressStyle)
		};

		// We need a wrapper element to prevent an exception when then
		// React component is removed. This is because we manually
		// move the rendered DOM element after creation.
		return (
			<div className="react-lineto-placeholder">
				<div
					ref={el => {
						this.el = el;
					}}
					{...props}
				/>
				<div {...progressProps} />
			</div>
		);
	}
}

Line.propTypes = Object.assign(
	{},
	{
		x0: PropTypes.number.isRequired,
		y0: PropTypes.number.isRequired,
		x1: PropTypes.number.isRequired,
		y1: PropTypes.number.isRequired
	},
	optionalStyleProps
);
