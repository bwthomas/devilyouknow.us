import React from 'react'
import PropTypes from 'prop-types'
import { PlatformPageTemplate } from '../../templates/about-page'

const PlatformPagePreview = ({ entry, widgetFor }) => (
  <PlatformPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

PlatformPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PlatformPagePreview
