import React, { memo } from 'react';

const ResetAll = memo(props => {
  const { onResetAll } = props;
  return (
    <button className="habits-reset" type="button" onClick={onResetAll}>
      Reset all
    </button>
  );
});

export default ResetAll;

// render() {
//   return (
//     <button
//       className="habits-reset"
//       type="button"
//       onClick={this.props.onResetAll}
//     >
//       Reset all
//     </button>
//   );
// }
