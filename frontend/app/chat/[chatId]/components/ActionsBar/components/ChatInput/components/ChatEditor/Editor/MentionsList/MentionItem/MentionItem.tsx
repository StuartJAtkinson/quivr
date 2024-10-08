import Image from "next/image";

import styles from "./MentionItem.module.scss";

import { SuggestionItem } from "../../types";

type MentionItemProps = {
  item: SuggestionItem;
  onClick: () => void;
  selected: boolean;
};

export const MentionItem = ({
  item,
  onClick,
  selected,
}: MentionItemProps): JSX.Element => {
  return (
    <span
      className={`${styles.mention_item_wrapper} ${
        selected ? styles.selected : ""
      }`}
      key={item.id}
      onClick={onClick}
    >
      {item.iconUrl ? (
        <Image
          className={styles.brain_image}
          src={item.iconUrl}
          alt="Brain or Model"
          width={18}
          height={18}
        />
      ) : (
        <div
          className={styles.brain_snippet}
          style={{ backgroundColor: item.snippet_color }}
        >
          <span>{item.snippet_emoji}</span>
        </div>
      )}
      <span className={styles.brain_name}>{item.label}</span>
    </span>
  );
};
