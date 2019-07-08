import PropTypes from 'prop-types';

export default PropTypes.shape({
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      completed: PropTypes.bool,
      createdAt: PropTypes.number
    })
  )
});
