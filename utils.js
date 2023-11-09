import { useRef, useEffect } from 'react';

export const SECTION_LIST_MOCK_DATA = [
    {
      title: 'Appetizers',
      data: [
        {
          id: '1',
          title: 'Pasta',
          price: '10',
        },
        {
          id: '3',
          title: 'Pizza',
          price: '8',
        },
      ],
    },
    {
      title: 'Salads',
      data: [
        {
          id: '2',
          title: 'Caesar',
          price: '2',
        },
        {
          id: '4',
          title: 'Greek',
          price: '3',
        },
      ],
    },
  ];

/**
 * 3. Implement this function to transform the raw data
 * retrieved by the getMenuItems() function inside the database.js file
 * into the data structure a SectionList component expects as its "sections" prop.
 * @see https://reactnative.dev/docs/sectionlist as a reference
 */
export function getSectionListData(data) {
  // Create an empty object to hold the section data
  const sections = {};

  // Iterate through the data and organize it into sections
  data.forEach((item) => {
    const category = item.category;

    // If the category is not in sections, create it
    if (!sections[category]) {
      sections[category] = [];
    }

    // Add the item to the corresponding section
    sections[category].push(item);
  });

  // Transform the object into an array with the required structure
  const sectionListData = Object.entries(sections).map(([title, data]) => ({
    title,
    data,
  }));

  return sectionListData;
}


export function useUpdateEffect(effect, dependencies = []) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect();
    }
  }, dependencies);
}
