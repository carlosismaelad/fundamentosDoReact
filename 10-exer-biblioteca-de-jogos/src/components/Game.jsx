import PropTypes from "prop-types"

Game.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onRemove: PropTypes.func
}

export default function Game(props){
    const {cover, title, onRemove} = props;

    return (
        <div>
            <img src={cover} alt="" />
            <div>
              <h2>{title}</h2>
              <button onClick={onRemove}>Remover</button>
            </div>
          </div>
    )
}

