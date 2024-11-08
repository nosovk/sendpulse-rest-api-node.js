export type BatchContactAttributeData = {
  attributesValues: AttributeValue[];
};

type AttributeValue = {
  attributeId: number;
  value: string;
};
