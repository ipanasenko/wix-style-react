import React from 'react';
import PropTypes from 'prop-types';
import WixComponent from '../BaseComponents/WixComponent';
import Modal from '../Modal/Modal';
import FooterStatus from './FooterStatus';
import Footer from './Footer';
import Header from './Header';
import MessageBoxFixedHeaderFooter from '../MessageBox/MessageBoxFixedHeaderFooter';
import InfiniteScroll from '../DataTable/InfiniteScroll';
import Search from './Search';

class ModalSelector extends WixComponent {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
    loadMore: PropTypes.func,
    hasMore: PropTypes.bool,
    enableOk: PropTypes.bool,
    height: PropTypes.string,
    prefixContent: PropTypes.node,
    footerStatus: PropTypes.node,
  }

  static defaultProps = {
    loadMore: () => {},
    hasMore: false,
    height: '540px'
  }

  render() {
    const {
      isOpen,
      height,
      onOk,
      onClose,
      onCancel,
      loadMore,
      hasMore,
      enableOk,
      footerStatus,
      prefixContent,
      children
    } = this.props;

    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Items Selection Modal"
        scrollableContent={false}
        scrollable={false}
        height={height}
        >
        <MessageBoxFixedHeaderFooter
          prefixContent={prefixContent}
          footer={<Footer onOk={onOk} onCancel={onCancel} enableOk={enableOk}>{footerStatus}</Footer>}
          header={<Header title="Choose Your Items" onCancel={onCancel} onClose={onClose}/>}
          >
          <InfiniteScroll
            loadMore={loadMore}
            hasMore={hasMore}
            >
            {children}
          </InfiniteScroll>
        </MessageBoxFixedHeaderFooter>
      </Modal>
    );
  }
}

ModalSelector.FooterStatus = FooterStatus;
ModalSelector.Search = Search;

export default ModalSelector;
