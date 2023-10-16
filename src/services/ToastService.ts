import { ReactNode } from 'react';
import { toast, ToastContent, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ToastService {
  private static _instance: ToastService;

  static getInstance(): ToastService {
    if (!this._instance) {
      this._instance = new ToastService();
    }
    return this._instance;
  }

  showError(content: ToastContent, icon?: ReactNode, config?: ToastOptions) {
    toast.dismiss();
    toast(content, {
      ...config,
      type: 'error',
      position: config?.position || 'top-right',
      autoClose: config?.autoClose || 10000,
      closeButton: true,
      style: {
        background: '#FFECEB',
        color: '#C3362B',
        fontSize: '16px',
        lineHeight: '21px',
        fontWeight: '500px !important',
      },
      icon,
      bodyClassName: 'toast-body',
    });
  }

  showInfo(content: ToastContent, icon?: ReactNode, config?: ToastOptions) {
    toast.dismiss();
    toast(content, {
      ...config,
      type: 'info',
      position: config?.position || 'top-right',
      autoClose: config?.autoClose || 10000,
      closeButton: true,
      style: {
        background: '#EBF1FF',
        color: '#3377FF',
        fontSize: '16px',
        lineHeight: '21px',
        fontWeight: '500px !important',
      },
      icon,
      bodyClassName: 'toast-body',
    });
  }

  showSuccess(content: ToastContent, icon?: ReactNode, config?: ToastOptions) {
    toast.dismiss();
    toast(content, {
      ...config,
      type: 'success',
      position: config?.position || 'top-right',
      autoClose: config?.autoClose || 10000,
      closeButton: true,
      style: {
        background: '#CFF5E1',
        color: '#0EA453',
        fontSize: '16px',
        lineHeight: '21px',
        fontWeight: '500px !important',
      },
      icon,
      bodyClassName: 'toast-body',
    });
  }

  showWarning(content: ToastContent, icon?: ReactNode, config?: ToastOptions) {
    toast.dismiss();
    toast(content, {
      ...config,
      type: 'warning',
      position: config?.position || 'top-right',
      autoClose: config?.autoClose || 10000,
      closeButton: true,
      style: {
        background: '#FFF1EB',
        color: '#BE5602',
        fontSize: '16px',
        lineHeight: '21px',
        fontWeight: '500px !important',
      },
      icon,
      bodyClassName: 'toast-body',
    });
  }

  dismiss(toastRef: any) {
    toast.dismiss(toastRef);
  }
}

export const toastService = ToastService.getInstance();