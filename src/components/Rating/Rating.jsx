import { RatingGroup } from "@chakra-ui/react";

const Rating = ({
  size,
  defaultValue,
  readOnly = false,
  colorPalette = "yellow",
}) => {
  return (
    <RatingGroup.Root
      readOnly={readOnly}
      count={5}
      defaultValue={defaultValue}
      size={size}
      colorPalette={colorPalette}
    >
      <RatingGroup.HiddenInput />
      <RatingGroup.Control>
        {Array.from({ length: 5 }).map((_, index) => (
          <RatingGroup.Item key={index} index={index + 1}>
            <RatingGroup.ItemIndicator />
          </RatingGroup.Item>
        ))}
      </RatingGroup.Control>
    </RatingGroup.Root>
  );
};

export default Rating;
