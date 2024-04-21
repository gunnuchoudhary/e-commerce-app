const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <>
      <div>
        <button
          className="d-flex justify-content-center bg-dark text-light py-3 w-100 fs-5 "
          onClick={scrollToTop}
        >
          Back to top
        </button>
      </div>
    </>
  );
};
export default Footer;
