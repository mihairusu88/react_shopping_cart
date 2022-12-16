import ModalWrapper from '@components/modals/Modal';
import ReactDOMClient from 'react-dom/client';

class Modal {
  constructor() {
    this.container = document.getElementById('modal-root');
    this.root = ReactDOMClient.createRoot(this.container);
  }

  open({ props = { title: null, confirmButton: null, cancelButton: null, component: null }, events = {} }) {
    this.root.render(
      <ModalWrapper
        key={Math.random()}
        title={props.title}
        confirmButton={props.confirmButton}
        cancelButton={props.cancelButton}
        component={props.component}
        {...events}
      />,
    );
  }
}

export default new Modal();
