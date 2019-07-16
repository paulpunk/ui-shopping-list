import PropTypes from 'prop-types';

export default PropTypes.shape({
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number,
      name: PropTypes.string,
      checked: PropTypes.bool,
      createdAt: PropTypes.number
    })
  )
});
