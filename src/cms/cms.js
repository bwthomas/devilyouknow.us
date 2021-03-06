import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import PressPagePreview from './preview-templates/PressPagePreview'
import EndorsementsPagePreview from './preview-templates/EndorsementsPagePreview'
import PlatformPagePreview from './preview-templates/PlatformPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('press', PressPagePreview)
CMS.registerPreviewTemplate('endorsements', EndorsementsPagePreview)
CMS.registerPreviewTemplate('platform', PlatformPagePreview)
