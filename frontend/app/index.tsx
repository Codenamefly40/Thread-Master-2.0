import { Text, View, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <View style={styles.brandRow}>
          <View style={styles.logoBox}>
            <Ionicons name="construct" size={22} color="#0A0A0A" />
          </View>
          <View>
            <Text style={styles.brandTitle}>THREAD REFERENCE</Text>
            <Text style={styles.brandSub}>MACHINIST EDITION · v1.0</Text>
          </View>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.h1}>Select System</Text>
        <Text style={styles.subtitle}>
          Choose the thread system you&apos;re working with. All specs are computed per ASME B1.1 / ISO 261.
        </Text>

        <Pressable
          testID="system-select-unified"
          style={({ pressed }) => [styles.bigCard, pressed && styles.cardPressed]}
          onPress={() => router.push({ pathname: '/threads', params: { system: 'unified' } })}
        >
          <View style={styles.cardLeft}>
            <Text style={styles.cardKicker}>INCH · ASME B1.1</Text>
            <Text style={styles.cardTitle}>UNIFIED</Text>
            <Text style={styles.cardDesc}>UNC · UNF · UNEF · UNS</Text>
            <Text style={styles.cardRange}>#0-80 to 1&quot;-8</Text>
          </View>
          <View style={styles.cardArrow}>
            <Ionicons name="chevron-forward" size={32} color="#FFB000" />
          </View>
        </Pressable>

        <Pressable
          testID="system-select-metric"
          style={({ pressed }) => [styles.bigCard, pressed && styles.cardPressed]}
          onPress={() => router.push({ pathname: '/threads', params: { system: 'metric' } })}
        >
          <View style={styles.cardLeft}>
            <Text style={styles.cardKicker}>MM · ISO 261/262</Text>
            <Text style={styles.cardTitle}>METRIC</Text>
            <Text style={styles.cardDesc}>Coarse · Fine · Extra Fine · Super Fine</Text>
            <Text style={styles.cardRange}>M1 to M25</Text>
          </View>
          <View style={styles.cardArrow}>
            <Ionicons name="chevron-forward" size={32} color="#FFB000" />
          </View>
        </Pressable>

        <View style={styles.featureRow}>
          <FeatureCell icon="calculator" label="TAP DRILL" />
          <FeatureCell icon="resize" label="3-WIRE" />
          <FeatureCell icon="layers" label="ALL CLASSES" />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>OFFLINE · NO ACCOUNT REQUIRED</Text>
      </View>
    </SafeAreaView>
  );
}

function FeatureCell({ icon, label }: { icon: any; label: string }) {
  return (
    <View style={styles.featCell}>
      <Ionicons name={icon} size={20} color="#FFB000" />
      <Text style={styles.featLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0A0A0A' },
  header: { paddingHorizontal: 20, paddingTop: 8, paddingBottom: 16, borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.08)' },
  brandRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  logoBox: { width: 40, height: 40, backgroundColor: '#FFB000', alignItems: 'center', justifyContent: 'center', borderRadius: 4 },
  brandTitle: { color: '#F3F4F6', fontSize: 16, fontWeight: '800', letterSpacing: 2 },
  brandSub: { color: '#9CA3AF', fontSize: 11, letterSpacing: 1.5, marginTop: 2 },
  body: { flex: 1, padding: 20, gap: 14 },
  h1: { color: '#F3F4F6', fontSize: 32, fontWeight: '800', letterSpacing: -0.5, marginTop: 8 },
  subtitle: { color: '#9CA3AF', fontSize: 14, lineHeight: 20, marginBottom: 12 },
  bigCard: {
    backgroundColor: '#171717',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    borderRadius: 6,
    padding: 22,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 120,
  },
  cardPressed: { backgroundColor: '#262626', borderColor: '#FFB000' },
  cardLeft: { flex: 1, gap: 4 },
  cardKicker: { color: '#FFB000', fontSize: 11, letterSpacing: 1.5, fontWeight: '700' },
  cardTitle: { color: '#F3F4F6', fontSize: 28, fontWeight: '800', letterSpacing: 1, marginTop: 4 },
  cardDesc: { color: '#F3F4F6', fontSize: 14, marginTop: 6 },
  cardRange: { color: '#9CA3AF', fontSize: 13, fontFamily: 'monospace', marginTop: 4 },
  cardArrow: { paddingLeft: 12 },
  featureRow: { flexDirection: 'row', gap: 10, marginTop: 8 },
  featCell: { flex: 1, backgroundColor: '#171717', borderWidth: 1, borderColor: 'rgba(255,255,255,0.12)', borderRadius: 4, paddingVertical: 14, alignItems: 'center', gap: 6 },
  featLabel: { color: '#9CA3AF', fontSize: 11, fontWeight: '700', letterSpacing: 1.2 },
  footer: { paddingVertical: 12, alignItems: 'center' },
  footerText: { color: '#6B7280', fontSize: 11, letterSpacing: 1.5, fontWeight: '600' },
});
