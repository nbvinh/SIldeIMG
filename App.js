
// import React, { useEffect, useState } from 'react';
// import { StyleSheet, Text, View, StatusBar, Dimensions, FlatList, Animated, Image, findNodeHandle, Touchable, TouchableOpacity, ScrollView } from 'react-native';


// const { width, height } = Dimensions.get("screen")
// const images = {
//   man:
//     'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//   women:
//     'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//   kids:
//     'https://images.pexels.com/photos/5080167/pexels-photo-5080167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//   skullcandy:
//     'https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//   help:
//     'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',

// };
// const data = Object.keys(images).map((i) => ({
//   key: i,
//   title: i,
//   image: images[i],
//   ref: React.createRef()
// }));
// const Tab = React.forwardRef(({ item, onItemPress }, ref) => {
//   return (
//     <TouchableOpacity style={{ zIndex: 0 }} onPress={onItemPress}>
//       <View ref={ref} >
//         {/* <Text style={{ color: 'white', fontSize: 14, fontWeight: '800', textTransform: 'uppercase' }}>{item.title}</Text> */}
//         <Image
//           style={{ width: 50, height: 30, borderRadius: 5 }}
//           source={{ uri: item.image }}
//         />
//       </View>

//     </TouchableOpacity>
//   )
// })
// const Indicator = ({ measures, scrollX }) => {
//   // console.log('scrollX', scrollX)
//   console.log(measures, 'measures')
//   const inputRange = data.map((_, i) => i * width);
//   // console.log('asdas', inputRange)
//   const indicatorWidth = scrollX.interpolate({
//     inputRange,
//     outputRange: measures.map((measure) => measure.width),
//   })
//   const indicatorHeight = scrollX.interpolate({
//     inputRange,
//     outputRange: measures.map((measure) => measure.height),
//   })
//   const translateX = scrollX.interpolate({
//     inputRange,
//     outputRange: measures.map((measure) => measure.x),
//   })
//   return (
//     <Animated.View
//       style={{
//         position: 'absolute',
//         height: indicatorHeight,
//         width: indicatorWidth,
//         left: 0,
//         borderRadius: 8,
//         borderWidth: 1,
//         borderColor: 'white',
//         transform: [{
//           translateX
//         }],
//         zIndex: 1
//       }}
//     />
//   )
// }
// const Tabs = ({ data, scrollX, onItemPress }) => {
//   const [measures, setMeasures] = React.useState([]);
//   const containerRef = React.useRef();
//   let m = [];
//   React.useEffect(() => {
//     setTimeout(() => {
//       data.forEach((item) => {
//         console.log(item.ref);
//         item.ref.current.measureLayout(
//           containerRef.current,
//           (x, y, width, height) => {
//             console.log(x, y, width, height);
//             m.push({
//               x,
//               y,
//               width,
//               height,
//             });
//             if (m.length === data.length) {
//               setMeasures(m);
//             }
//           }
//         )
//       })
//     });
//   }, [])
//   return (
//     <View style={{ position: 'absolute', top: 100, width }}>
//       <View ref={containerRef} style={{ justifyContent: 'space-evenly', flex: 1, flexDirection: 'row' }}>
//         {
//           data.map((item, index) => {
//             return <Tab key={item.key} item={item} ref={item.ref} onItemPress={() => onItemPress(index)} />
//           })
//         }
//       </View>
//       {measures.length > 0 ?
//         <Indicator measures={measures} scrollX={scrollX} /> : null
//       }
//     </View>
//   )
// }
// const App = () => {
//   const scrollX = React.useRef(new Animated.Value(0)).current;
//   const ref = React.useRef();
//   const onItemPress = React.useCallback(itemIndex => {
//     ref?.current?.scrollToOffset({
//       offset: itemIndex * width
//     })
//   })

//   return (
//     <View style={styles.container}>
//       <StatusBar hidden />
//       <Animated.FlatList
//         ref={ref}
//         data={data}
//         keyExtractor={(item) => item.key}
//         showsHorizontalScrollIndicator={false}
//         horizontal
//         pagingEnabled
//         bounces={false}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//           { useNativeDriver: false }
//         )}
//         renderItem={({ item }) => {
//           return (
//             <View style={{ width, height: 200 }}>
//               <Image
//                 source={{ uri: item.image }}
//                 style={{ flex: 1, resizeMode: 'cover', borderRadius: 20, margin: 20 }}
//               />

//             </View>
//           )
//         }}
//       />
//       <Tabs scrollX={scrollX} data={data} onItemPress={onItemPress} />
//     </View>
//   )
// }

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions, FlatList, Animated, Image, findNodeHandle, Touchable, TouchableOpacity, ScrollView } from 'react-native';


const { width, height } = Dimensions.get("screen")
const IMAGE_SIZE =( width -35)/3
const SPACING = 2.5
const data = [
  { id: 0, images: 'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', img1: 'https://i.pinimg.com/originals/a0/dc/35/a0dc35e337a9c7bf922bf5edc022236d.jpg' },
  { id: 1, images: 'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', img1: 'https://i.pinimg.com/originals/fe/56/1f/fe561fe1fd0a4cac59ae2629293e36db.jpg' },
  { id: 2, images: 'https://images.pexels.com/photos/5080167/pexels-photo-5080167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', img1: 'https://icdn.dantri.com.vn/tI0YUx18mEaF5kMsGHJ/Image/2013/01/Nature-2-c9452.jpg' },
  { id: 3, images: 'https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', img1: 'https://blogbutchi.files.wordpress.com/2015/11/hinh-anh-thien-nhien-hung-vi-anh-nen-may-tinh-dep-nhat-7.jpg' },
  { id: 4, images: 'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', img1: 'https://img.thuthuatphanmem.vn/uploads/2018/10/09/hinh-anh-thien-nhien-bien-dao-dep-nhat_041755353.jpg' },
  { id: 5, images: 'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', img1: 'http://2.bp.blogspot.com/-Qyosw-kM5nc/VRpV9kLeIHI/AAAAAAAADcM/YV6MvxHXgSE/s1600/hinh%2Banh%2Bthien%2Bnhien%2Bdep%2Bnha%2Bthe%2Bgioi%2B2015%2B(1).jpeg' },
  { id: 6, images: 'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhVDVKpolsAbDvdJUyUrFb6sWEffd2XCvQQ&usqp=CAU' },
  { id: 7, images: 'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzHWbwD3DoWjJxXihpL4IL_l4EEen_EubIuw&usqp=CAU' },
  { id: 8, images: 'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', img1: 'https://i.pinimg.com/originals/17/d8/b1/17d8b11d98df2e720262c79fdad04c48.jpg' },
];
const App = () => {
  const topRef = React.useRef();
  const thumbref = React.useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollToActiveIndex = (index) => {
    setActiveIndex(index)
    topRef?.current?.scrollToOffset({
      offset: index * width,
      animated: true
    })
    if (index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > width / 3) {
      thumbref?.current?.scrollToOffset({
        offset: index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2,
        animated: true
      })
    }
    else {
      thumbref?.current?.scrollToOffset({
        offset: 0,
        animated: true
      })
    }
    const test = index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2
    console.log('test', test)
  }
  return (
    <View style={styles.container}>
      <FlatList
        ref={topRef}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={ev => {
          scrollToActiveIndex(Math.floor(ev.nativeEvent.contentOffset.x / width))
        }}
        renderItem={({ item }) => {
          return (
            <View style={{ width, height }}>
              <Image
                source={{ uri: item.images }}
                style={[StyleSheet.absoluteFillObject]}
              />

            </View>
          )
        }}
      />
      <FlatList
        ref={thumbref}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={{ height:80,marginHorizontal:10 }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity onPress={() => scrollToActiveIndex(index)}>
              <Image
                source={{ uri: item.images }}
                style={{
                  width: IMAGE_SIZE,
                  height: 70,
                  borderRadius: 12,
                  marginRight: SPACING,
                  marginLeft:2.5,
                  borderWidth: 2,
                  borderColor: activeIndex === index ? 'white' : null
                }}
              />

            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});