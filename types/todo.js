import PropTypes from 'prop-types';

export default PropTypes.shape({
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      checked: PropTypes.bool,
      createdAt: PropTypes.number
    })
  )
});
