import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const TrackLoader = () => {
	return (
		<SkeletonPlaceholder speed={1000}>
      <SkeletonPlaceholder.Item marginHorizontal={16} height={190}>
        <SkeletonPlaceholder.Item width={140} height={140} marginBottom={10} />
				<SkeletonPlaceholder.Item width={140} height={18} borderRadius={5} marginBottom={4} />
				<SkeletonPlaceholder.Item width={140} height={18} borderRadius={5} />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
	)
}

export default TrackLoader;