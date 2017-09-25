import React from 'react';
import PropTypes from 'prop-types';
import WixComponent from '../../BaseComponents/WixComponent';
import FooterLayout from '../../MessageBox/FooterLayout';
import styles from './Footer.scss';

class Footer extends WixComponent {
  static propTypes = {
    buttonsHeight: PropTypes.string,
    onCancel: PropTypes.func,
    onOk: PropTypes.func
  }

  static defaultProps = {
    buttonsHeight: 'small'
  }

  render() {
    const {
      onOk,
      onCancel,
      buttonsHeight,
      children
    } = this.props;
    return (
      <div className={styles.footer}>
        <FooterLayout
          buttonsHeight={buttonsHeight}
          confirmText="Select"
          cancelText="Cancel"
          onCancel={onCancel}
          onOk={onOk}
          >
          {children}
        </FooterLayout>
      </div>  
    );
  }
}

export default Footer;
