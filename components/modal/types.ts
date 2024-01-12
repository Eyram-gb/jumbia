export type ModalProps = {
  /** Toggles the modal visibility. */
  openModal: boolean;
  /** A callback that is invoked when the modal will close. */
  closeModal: () => void;
  /** Modal content. */
  children: React.ReactNode;
  /** Force initial focus to a specific ref */
  initialFocus?: React.MutableRefObject<HTMLElement | null> | undefined;
};
export type ProductDetailModalProps = {
  openProductDetailModal: boolean;
  SetOpenProductDetailModal: React.Dispatch<React.SetStateAction<boolean>>;
};