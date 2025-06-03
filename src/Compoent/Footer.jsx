const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <h3 className="footer_text transform-common">Copyright {year} Tamil Movies Team. All Rights are reserved to their respective owners.</h3>
    </div>
  )
}

export default Footer;