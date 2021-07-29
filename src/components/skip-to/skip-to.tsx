import * as React from 'react';

export interface SkipToProps {
  label?: string;
  id: string;
}

const SkipTo: React.FC<SkipToProps> = ({ label, id }) => (
  <a href={`#${id}`}>{label || `Skip to ${id}`}</a>
);

export default SkipTo;
