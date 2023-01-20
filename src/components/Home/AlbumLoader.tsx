import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const AlbumLoader = () => {
	return (
		<SkeletonPlaceholder speed={1000}>
      <SkeletonPlaceholder.Item marginHorizontal={16} height={168}>
        <SkeletonPlaceholder.Item width={140} height={140} marginBottom={10} />
				<SkeletonPlaceholder.Item width={140} height={18} borderRadius={5} />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
	)
}

export default AlbumLoader;