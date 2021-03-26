import React from 'react'
import PropTypes from 'prop-types'
import { EndorsementsPageTemplate } from '../../templates/about-page'

const EndorsementsPagePreview = ({ entry, widgetFor }) => (
  <EndorsementsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

EndorsementsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default EndorsementsPagePreview
