// Default Helmet props
import defaultLayout from 'react-esc/config/layout'

export default Object.assign(defaultLayout, {
  link: [
    ...defaultLayout.link,
    {rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'}
  ]
})
